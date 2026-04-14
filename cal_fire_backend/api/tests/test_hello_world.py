import pytest

def test_hello_world(client):
  response = client.get('/')
  
  message = response.get_data(as_text=True)
  
  assert response.status_code == 200
  assert len(message) > 0
  
  
def test_zip_returns_documentation(client):
  response = client.get('/zipcode')
  message = response.get_data(as_text=True)
  
  assert len(message) >0
  # the documentation must conatin zipcode in it 
  assert message.find('zipcode') > -1