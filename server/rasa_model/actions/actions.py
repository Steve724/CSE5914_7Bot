# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

import random
from typing import Any, Text, Dict, List
from matplotlib.pyplot import table

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
#
#
# class ActionHelloWorld(Action):

#     def name(self) -> Text:
#         return "action_hello_world"

#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

#         dispatcher.utter_message(text="Hello World!")

#         return []

class ActionOrderResponse(Action):

    def name(self) -> Text:
        return "action_order_res"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        drink = next(tracker.get_latest_entity_values("drink"), None)
        quantity = next(tracker.get_latest_entity_values("quantity"), None)

        if not drink:
            msg = "Ok, what drink can I get for you?"
            dispatcher.utter_message(text=msg)
            return []
        
        else:
            if not quantity:
                msg = f"No problem, I will remember you want a cup of {drink}!"
                dispatcher.utter_message(text=msg)
                return []
            else:
                msg = f"Sure, you ordered {quantity} cups of {drink}!"
                dispatcher.utter_message(text=msg)
                return []

        return []
        
class ActionGreet(Action):

    def name(self) -> Text:
        return "action_greet"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        table_num = next(tracker.get_latest_entity_values("table_num"), None)

        choice = random.choice([1,2])
        if(choice == 1):
            msg = "Hey! Nice to have you here today!"
        else:
            msg = "Hello! How can I help you?"
        if not table_num:
            msg += " Can I have your table number first?"
            dispatcher.utter_message(text=msg)
            return []

        return []