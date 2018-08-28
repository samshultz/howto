from django.urls import include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from howto.views import StepHomeView
from django.urls import path, re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/', include('api.urls', namespace='api')),
    re_path(r'^ckeditor/', include('ckeditor_uploader.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

urlpatterns += [
    re_path(r'^(?P<path>.*)/$', StepHomeView.as_view()),
]

urlpatterns += [
    re_path(r'^$', StepHomeView.as_view()),
]
