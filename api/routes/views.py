import json
from base64 import b64encode
from django.http import JsonResponse, HttpResponse
from django.shortcuts import redirect
from .models import URL

# Create your views here.
def create_url(request):
    if request.method != "POST":
        response = HttpResponse("Method Not Allowed", status=405)
        response.headers["Allow"] = "POST"
        return response
    if not request.body:
        return JsonResponse({
            'message': 'URL not provided',
            'success': False
        }, status=400)
    data = json.loads(request.body)
    url = data.get('url')
    if not url:
        return JsonResponse({
            'message': 'URL not provided',
            'success': False
        }, status=400)
    c_id = b64encode(str(URL.objects.count()).encode()).decode('utf-8')
    obj = URL.objects.create(actual=url, shortened=c_id)
    obj.save()
    return JsonResponse({
        'url': '/u/' + c_id + '/',
        'success': True,
        'message': "Shortened succesfully!"
    })

def url_handler(request, url):
    obj = URL.objects.get(shortened=url)
    if(obj):
        return redirect(obj.actual)
    return JsonResponse({
        "message": "Not a valid URL",
    }, status=404)