from celery import Celery
from cern_api import fetch_cern_data

celery_app = Celery("tasks", broker="redis://localhost:6379/0")

@celery_app.task
def fetch_and_store_data(query):
    data = fetch_cern_data(query)
    return data
