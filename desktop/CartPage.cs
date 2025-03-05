//using System;
//using System.Collections.ObjectModel;
//using System.ComponentModel;
//using System.Linq;
//using System.Windows.Input;
//using WpfApplication;

//public class CartPage : INotifyPropertyChanged
//{
//    public ObservableCollection<CartItem> CartItems { get; set; }

//    private decimal _subtotal;
//    public decimal Subtotal
//    {
//        get => _subtotal;
//        set
//        {
//            _subtotal = value;
//            OnPropertyChanged(nameof(Subtotal));
//            OnPropertyChanged(nameof(Total));
//        }
//    }

//    private decimal _discount;
//    public decimal Discount
//    {
//        get => _discount;
//        set
//        {
//            _discount = value;
//            OnPropertyChanged(nameof(Discount));
//            OnPropertyChanged(nameof(Total));
//        }
//    }

//    public decimal Total => Subtotal - Discount;

//    public event PropertyChangedEventHandler PropertyChanged;

//    public CartPage()
//    {
//        CartItems = new ObservableCollection<CartItem>();
//        UpdateCart();
//    }

//    public void AddItem(CartItem item)
//    {
//        var existingItem = CartItems.FirstOrDefault(i => i.ProductId == item.ProductId);
//        if (existingItem != null)
//        {
//            existingItem.Quantity += item.Quantity;
//        }
//        else
//        {
//            CartItems.Add(item);
//        }
//        UpdateCart();
//    }

//    public void RemoveItem(CartItem item)
//    {
//        CartItems.Remove(item);
//        UpdateCart();
//    }

//    public void IncreaseQuantity(CartItem item)
//    {
//        item.Quantity++;
//        UpdateCart();
//    }

//    public void DecreaseQuantity(CartItem item)
//    {
//        if (item.Quantity > 1)
//        {
//            item.Quantity--;
//        }
//        else
//        {
//            CartItems.Remove(item);
//        }
//        UpdateCart();
//    }

//    public void ApplyDiscount(decimal discountAmount)
//    {
//        Discount = discountAmount;
//    }

//    private void UpdateCart()
//    {
//        Subtotal = CartItems.Sum(item => item.TotalPrice);
//    }

//    protected virtual void OnPropertyChanged(string propertyName)
//    {
//        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
//    }
//}
