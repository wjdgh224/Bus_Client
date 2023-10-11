from django.shortcuts import render
import sys, os, django
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")
#django.setup()
import myyl.iot

def index(request):
    # print("hi")
    # print(myyl.iot.i)
    # print("bye")
    # context = {'key': myyl.iot.i}
    context = {'text' : "hello world"}
    return render(request, 'index.html', context)