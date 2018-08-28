from rest_framework import generics
from howto.models import Step
from .serializers import StepSerializer
from rest_framework.filters import SearchFilter


class StepListView(generics.ListCreateAPIView):
    queryset = Step.objects.all()
    serializer_class = StepSerializer
    filter_backends = (SearchFilter,)
    search_fields = ('title',)


class StepDetailView(generics.RetrieveAPIView):
    queryset = Step.objects.all()
    serializer_class = StepSerializer
