from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from . import views

urlpatterns = [
    path('api/create-url/', csrf_exempt(views.create_url), name='create_url'),
    path('u/<str:url>', csrf_exempt(views.url_handler), name="url_handler"),
    path('u/<str:url>/', csrf_exempt(views.url_handler), name="url_handler")
]