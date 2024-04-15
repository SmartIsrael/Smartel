from django.urls import path
from .views import ProductListCreateView, ProductDetailView, update_product, delete_product

urlpatterns = [
    path('create/list/', ProductListCreateView.as_view(), name='product-list-create'),
    path('details/<int:pk>/', ProductDetailView.as_view(), name='product-detail'), 
    path('update/<int:product_id>/', update_product, name='update_product'),
    path('delete/update/<int:product_id>/', delete_product, name='delete_product'),
]