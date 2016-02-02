from django.shortcuts import render
from django.http import HttpResponse
from .models import FoodCategory
def index(request):
	n=len(FoodCategory.objects.all())
	
	return render(request,'restaurant/page1.html',{'noOfCategory':n})
# Create your views here.
