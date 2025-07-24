from dataclasses import dataclass
from typing import Literal

@dataclass
class EmailForm:
    type:Literal['FindAnAgent', 'BuyHomeIns', 'BuyCarIns']
    first_name:str
    last_name:str
    address:str
    city:str
    zipcode:str
    phone_number:str
    email:str
    anythingElse:str