from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product, Order, OrderItem, ShippingAddress




    
# class UserSerializerWithToken(UserSerializer):
#         token = serializers.SerializerMethodField(read_only=True)
#         class Meta:
#             model = User
#         fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']

#         def get_token(self, obj):
#             token = RefreshToken.for_user(obj)
#             return str(token.access_token)

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = '__all__'


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    orderItems = serializers.SerializerMethodField(read_only=True)
    shippingAddress = serializers.SerializerMethodField(read_only=True)
    # user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order
        fields = '__all__'

    def get_orderItems(self, obj):
        items = obj.orderItem_set.all()
        serializer = OrderItemSerializer(items, many=True)
        return serializer.data

    def get_shippingAddress(self, obj):
        try:
            address = ShippingAddressSerializer(
                obj.shippingAddress, many=False).data
        except:
            address = False
        return address