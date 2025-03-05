using MySql.Data.MySqlClient;
using System.Collections.ObjectModel;
using System.Configuration;
using System.Data;
using System.Windows;
using System.Windows.Controls;

namespace WpfApplication
{
    public partial class Cart : Page
    {
        public ObservableCollection<CartItem> CartItems { get; set; } = new ObservableCollection<CartItem>();

        public Cart()
        {
            InitializeComponent();
            LoadCartItems();
            CartItemsList.ItemsSource = CartItems;
        }

        private void LoadCartItems()
        {
            string connectionString = ConfigurationManager.ConnectionStrings["MyDB"].ConnectionString;

            using (MySqlConnection conn = new MySqlConnection(connectionString))
            {
                conn.Open();
                string query = "SELECT id, product_name,price, quantity, image_url FROM cart";
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                using (MySqlDataReader reader = cmd.ExecuteReader())
                {
                    CartItems.Clear();
                    while (reader.Read())
                    {
                        CartItems.Add(new CartItem
                        {
                            Id = reader.GetInt32("id"),
                            ProductName = reader.GetString("product_name"),
                            ImageUrl = reader.GetString("image_url"),
                            Price = reader.GetDecimal("price"),
                            Quantity = reader.GetInt32("quantity")
                        });
                    }
                }
            }

            // Update summary
            UpdateSummary();
        }

        private void UpdateSummary()
        {
            SubtotalText.Text = CartItems.Sum(i => i.TotalPrice).ToString("C");
            DiscountText.Text = "0.00";  // Apply logic for discount
            TotalText.Text = CartItems.Sum(i => i.TotalPrice).ToString("C");
            CartItemCount.Text = $"{CartItems.Count} items";
        }
        private void IncreaseQuantity_Click(object sender, RoutedEventArgs e)
        {
            if (sender is Button button && button.DataContext is CartItem item)
            {
                item.Quantity++;
                UpdateCartItem(item);
            }
        }

        private void DecreaseQuantity_Click(object sender, RoutedEventArgs e)
        {
            if (sender is Button button && button.DataContext is CartItem item && item.Quantity > 1)
            {
                item.Quantity--;
                UpdateCartItem(item);
            }
        }

        private void UpdateCartItem(CartItem item)
        {
            string connectionString = ConfigurationManager.ConnectionStrings["MyDB"].ConnectionString;

            using (MySqlConnection conn = new MySqlConnection(connectionString))
            {
                conn.Open();
                string query = "UPDATE cart SET quantity = @Quantity WHERE id = @Id";
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@Quantity", item.Quantity);
                    cmd.Parameters.AddWithValue("@Id", item.Id);
                    cmd.ExecuteNonQuery();
                }
            }

            UpdateSummary();
            CartItemsList.Items.Refresh(); // Refresh UI
        }

    }
}
