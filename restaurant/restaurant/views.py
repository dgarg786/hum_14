from django.shortcuts import render
from django.http import HttpResponse
from .models import FoodCategory
def index(request):
	value= [1,2,3,4,5]
	colors= ['red','blue']
	listf=zip(value,colors)
	rotate= [60,120,180,240,300]
	return render(request,'restaurant/cssTest.html',{'value':value,'color':'red','rotate':rotate,'colors':colors,'list':listf})
# Create your views here.
