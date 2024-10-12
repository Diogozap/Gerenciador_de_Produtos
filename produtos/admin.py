from django.contrib import admin
from .models import Produto

@admin.register(Produto)
class ProdutoAdmin(admin.ModelAdmin):
    list_display = ('id', 'nome', 'categoria', 'preco', 'quantidade_em_estoque', 'data_criacao')
    search_fields = ('nome', 'categoria')
    list_filter = ('categoria',)
