from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Contact
from .serializers import ContactSerializer

class ContactUsCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

class ContactUsUpdateView(generics.UpdateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

class ContactUsDeleteView(generics.DestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

@api_view(['POST'])
def contact_us_submission(request):
    return ContactUsCreateView.as_view()(request)

@api_view(['PUT'])
def update_contact(request, contact_id):
    return ContactUsUpdateView.as_view()(request, pk=contact_id)

@api_view(['DELETE'])
def delete_contact(request, contact_id):
    return ContactUsDeleteView.as_view()(request, pk=contact_id)
