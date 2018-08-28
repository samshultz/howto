from django.views.generic.base import TemplateView
from django.conf import settings

class StepHomeView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super(StepHomeView, self).get_context_data(**kwargs)
        context['page_size'] = settings.REST_FRAMEWORK['PAGE_SIZE']
        return context
    
