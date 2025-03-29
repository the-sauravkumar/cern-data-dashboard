from sqlalchemy import Column, Integer, String, Float
from db import Base

class CERNData(Base):
    __tablename__ = "cern_data"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    energy = Column(Float)
