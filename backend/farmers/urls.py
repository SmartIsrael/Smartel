from django.urls import path
from . import views

app_name = 'farmers'

urlpatterns = [
    path('farmers/', views.FarmersListCreateView.as_view(), name='farmers-list'),
    path('farmers/<int:pk>/', views.FarmersDetailView.as_view(), name='farmers-detail'),
    path('farmers/<int:farmer_id>/update/', views.update_farmer, name='update-farmer'),
    path('farmers/<int:farmer_id>/delete/', views.delete_farmer, name='delete-farmer'),
    path('farmers/farmers/', views.create_farmer, name='create-farmer'),
]
