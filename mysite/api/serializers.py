from howto.models import Step
from rest_framework.serializers import ModelSerializer


class StepSerializer(ModelSerializer):
    
    class Meta:
        model = Step
        fields = "id", "name", "title", "content"
        