from fastapi import FastAPI, Query
from cern_api import fetch_cern_data
from db import engine, SessionLocal
import models

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

@app.get("/fetch-data/")
async def get_data(query: str = Query(..., description="Search CERN Data")):
    data = fetch_cern_data(query)
    return {"results": data}
