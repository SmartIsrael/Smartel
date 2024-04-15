from django.urls import path
from .views import ContactUsCreateView, ContactUsUpdateView, ContactUsDeleteView, contact_us_submission

app_name = 'contact_us'

urlpatterns = [
    path('contact_us/', ContactUsCreateView.as_view(), name='contact_us_submission'),
    path('contact_us/<int:pk>/', ContactUsUpdateView.as_view(), name='update_contact'),
    path('contact_us/<int:pk>/delete/', ContactUsDeleteView.as_view(), name='delete_contact'),
]
