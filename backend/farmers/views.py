# farmers/views.py

from rest_framework import generics
from .models import Farmers
from .serializers import FarmersSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

class FarmersListCreateView(generics.ListCreateAPIView):
    queryset = Farmers.objects.all()
    serializer_class = FarmersSerializer

class FarmersDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Farmers.objects.all()
    serializer_class = FarmersSerializer

@api_view(['POST'])
def create_farmer(request):
    serializer = FarmersSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_farmer(request, farmer_id):
    try:
        farmer = Farmers.objects.get(id=farmer_id)
        serializer = FarmersSerializer(farmer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Farmers.DoesNotExist:
        return Response({'message': 'Farmer not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
def delete_farmer(request, farmer_id):
    try:
        farmer = Farmers.objects.get(id=farmer_id)
        farmer.delete()
        return Response({'message': 'Farmer deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
    except Farmers.DoesNotExist:
        return Response({'message': 'Farmer not found'}, status=status.HTTP_404_NOT_FOUND)
