from rest_framework import viewsets, filters
from .models import Produto
from .serializers import ProdutoSerializer
from django_filters.rest_framework import DjangoFilterBackend

class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all().order_by('-data_criacao')
    serializer_class = ProdutoSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['categoria']
    search_fields = ['nome']
