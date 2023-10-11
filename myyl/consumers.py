import json
from random import randint
from datetime import datetime
# from time import sleep
from asyncio import sleep
from myyl.iot import i, o
from myyl.weather import check_weather

from channels.generic.websocket import WebsocketConsumer, AsyncWebsocketConsumer


class GraphConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        print("입출력", i, o)


        while True:
            total = i[-1] - o[-1]
            if total < 0:
                total = 0
            congestion = check_weather(total)
            now = datetime.now()
            hour = now.hour #now.hour

            await self.send(json.dumps({'value': total, 'cong': congestion, 'hour': hour}))
            await sleep(2)