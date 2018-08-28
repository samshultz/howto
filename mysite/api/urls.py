from django.urls import re_path
from . import views

app_name = 'api'

urlpatterns = [
    
    re_path(r'^steps/$',
        views.StepListView.as_view(),
        name='step_list'),
    re_path(r'^steps/(?P<pk>\d+)/$',
        views.StepDetailView.as_view(),
        name='step_detail'),
]