from django.shortcuts import render
from django.http import HttpResponse
from .models import ExampleModel

def index(request):
    examples = ExampleModel.objects.all()
    return render(request, 'main/index.html', {'examples': examples})
