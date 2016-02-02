from django.shortcuts import render
from django.http import HttpResponse
from .models import FoodCategory
def index(request):
	
	return render(request,'restaurant/page1.html',)
# Create your views here.
