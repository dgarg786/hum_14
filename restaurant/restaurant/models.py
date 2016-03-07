from __future__ import unicode_literals

from django.db import models


#Foood Category fields
class CategoryName(models.Model):
	name= models.CharField(max_length=128,unique=True)
	picture = models.ImageField(upload_to='Category',blank=True)

	def __str__(self):
		return self.name

class SubCategoryName(models.Model):
	categoryName=models.ForeignKey(CategoryName,on_delete=models.CASCADE,related_name='category')
	name= models.CharField(max_length=128,unique=True)
	picture = models.ImageField(upload_to='SubCategory',blank=True)

	def __str__(self):
		return self.name


#Food Item fields
class ItemName(models.Model):
	name=models.CharField(max_length=128,unique=True)
	pic = models.ImageField(upload_to='Food',blank=True)
	subCategory=models.ForeignKey(SubCategoryName,on_delete=models.CASCADE)
	details= models.TextField(blank=True)
	price=models.PositiveIntegerField(default=0,blank=True)

	def __str__(self):
		return self.name