from django.shortcuts import render
from django.http import HttpResponse
from .models import CategoryName,SubCategoryName,ItemName
import json
from django.core import serializers
from django.template.loader import render_to_string
from django.core.serializers.json import DjangoJSONEncoder
def index(request):
	
	return render(request,'restaurant/page1_sec2.html',{})


def subCategory(request):
	
	if request.method == 'GET':
		id_number=request.GET['category_id']
		id_number=int(id_number)+1
		#print id_number
		name=SubCategoryName.objects.filter(pk=id_number)
   		
   		#print name
	   	
	   	print "hello"
	   	
	   	itemN=ItemName.objects.filter(subCategory=name).values("name","price","pic","details")	   	
	   	#print itemN[0]._meta.get_all_field_name()
	   	#print itemN.objects.filter()[:1].get()
	   	print list(itemN)
	   	data2=json.dumps(list(itemN),cls=DjangoJSONEncoder)
	   	

	   	#this one is used when list is to be sent as json
		#data=json.dumps(array2)
		# html = render_to_string('restaurant/ab.html', {'subCategory':array,'subCategoryItem':array2,'itemPrice':array3})
    	return HttpResponse(data2)
	   	
	
	
	return render(request,'restaurant/ab.html',{'subCategory':array,'subCategoryItem':array2,'itemPrice':array3})


def subMenu(request):
	
	name=SubCategoryName.objects.all();
   	# print name
   	array = []
   	array2 = []
   	array3=[]
   	itemName=ItemName.objects.filter(subCategory=name)#.values("name","price")
   	#print namePrice
   	itemPrice=ItemName.objects.filter(subCategory=name).values_list('price',flat=True)

   	for i in itemName:
   		array2.append(str(i).encode("utf8"))
   	for i in itemPrice:
   		array3.append(str(i).encode("utf8"))
   	#print array2
   	for i in name:
   		 array.append(str(i).encode("utf8"))
	

	# print str(array[0])
	# print type(array)

	
	
	return render(request,'restaurant/ab.html',{'subCategory':array,'subCategoryItem':array2,'itemPrice':array3})

def category(request):
		if request.method=='GET':
			id_number=request.GET['category_id']
			print "#############",id_number
			id_number=int(id_number)
			#print id_number
			name=CategoryName.objects.filter(pk=id_number)
	   		
	   		#print name
		   	
		   	
		   	
		   	itemN=SubCategoryName.objects.filter(categoryName=name).values("name")#,"price","picture","details")	   	
		   	data2=json.dumps(list(itemN),cls=DjangoJSONEncoder)
		   	print data2
		   	return HttpResponse(data2)


	   	#this one is used when list is to be sent as json
		#data=json.dumps(array2)
		# html = render_to_string('restaurant/ab.html', {'subCategory':array,'subCategoryItem':array2,'itemPrice':array3})
    	
	#return HttpResponse("hello")
	   	