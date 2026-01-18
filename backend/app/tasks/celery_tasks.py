from celery import Celery
import os

# Create celery instance
redis_url = os.getenv("REDIS_URL", "redis://redis:6379/0")
app = Celery("msme_tasks", broker=redis_url, backend=redis_url)

@app.task
def dummy_task():
    return "Celery is working!"
