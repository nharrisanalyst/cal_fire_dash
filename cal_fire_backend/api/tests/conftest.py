''' 
docker commands to run pytest

docker compose run --rm api-test bash
# pytest -vv
'''

import pytest  
from main import app as flask_app

@pytest.fixture()
def app():
  return flask_app
  
@pytest.fixture()
def client(app):
  return app.test_client()