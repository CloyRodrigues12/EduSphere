from django.contrib import admin
from django.urls import path
from django.http import JsonResponse

def api_home(request):
    return JsonResponse({"message": "Hello from Django!", "status": "Connected"})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/home/', api_home),
]