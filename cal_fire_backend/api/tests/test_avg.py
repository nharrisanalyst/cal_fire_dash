import pytest
from Models.average import DataAvg

def test_data(client):
  response = client.get('/data')
  data = response.json
  
  assert response.status_code == 200
  assert 'message' in data
  assert data['message'].find('data') > -1
  assert "avgdata" in data
  assert "zipcode" in data  
  

def test_data_avgdata(client):
  response = client.get('/data/avgdata')
  data = response.json
  assert 'avg_data' in data
  
  avg_data = data['avg_data']
  
  assert response.status_code == 200
  assert len(avg_data) > 5
  for avg in avg_data:
    data_avg = DataAvg(**avg)
    assert isinstance(data_avg.ppc_class, float)
    assert isinstance(data_avg.fire_risk, float)
    assert data_avg.year >= 2018
   
  
  