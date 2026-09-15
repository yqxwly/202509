from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from pypinyin import lazy_pinyin, Style
from snownlp import SnowNLP
import json
from datetime import datetime, timezone

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["GET", "POST"],
)

profile = {
    "heroTitle": "关于我（来自后端）",  # → 临时加的标记，验证完删掉
    "heroSubtitle": "项目，创意，灵感，心得，我的作品",
    "featuredWork": {
        "kicker": "作品",
        "title": "文字实验室",
        "copy": "拼音和情绪，挖掘中文里的细节",
        "linkLabel": "打开作品",
    },
    "identity": {
        "motto": "已识乾坤大，尤怜草木青",
        "learning": "零到全栈",
    },
}


# 请求体声明
class AnalyzeRequest(BaseModel):
    text: str


# 情绪分析函数
def score_label(score):
    if score >= 0.6:
        return "偏积极"
    elif score <= 0.4:
        return "偏消极"
    else:
        return "中性"


HISTORY_FILE = "history.json"

# 读
def load_history():
    try:
        with open(HISTORY_FILE, "r", encoding="utf-8") as f:  #with 自动关闭
            return json.load(f)
    except FileNotFoundError:
        return []

# 读出全部，追加一条，整个写回覆盖
def save_record(record):
    records = load_history()
    records.append(record)
    with open(HISTORY_FILE, "w", encoding="utf-8") as f:
        json.dump(records, f, ensure_ascii=False, indent=2)  #indent 缩进2


@app.get("/api/profile")
def get_profile():
    return profile


@app.post("/api/analyze")
def analyze(req: AnalyzeRequest):
    text = req.text
    score = round(SnowNLP(text).sentiments, 2)  # 真模型打的分
    result = {
        "text": text,
        "score": score,
        "label": score_label(score),
        "pinyin": " ".join(lazy_pinyin(text, style=Style.TONE)),
        "created_at": datetime.now(
            timezone.utc).isoformat(timespec="seconds"),  # ← 新增时区，utc标准
    }
    save_record(result)  # ← 存档到文件
    return result


@app.get("/api/history")
def history():
    records = load_history()   #全部读出来
    records.reverse()          # 倒过来：新的排前面
    return records[:10]        # 切一刀：只留最近 10 条

