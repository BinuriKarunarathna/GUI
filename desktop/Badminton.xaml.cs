using System;
using System.Net.Http;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using Newtonsoft.Json;

namespace WpfApplication
{
    public partial class Badminton : Page
    {
        public Badminton()
        {
            InitializeComponent();
        }

        private async void AddToCart_Click(object sender, RoutedEventArgs e)
        {
            Button button = sender as Button;
            if (button != null && button.Tag != null)
            {
                string[] productData = button.Tag.ToString().Split('|');
                string productName = productData[0];
                decimal price = Convert.ToDecimal(productData[1]);

                var cartItem = new { product_name = productName, price = price, quantity = 1, image_url =" " };

                using (HttpClient client = new HttpClient())
                {
                    var jsonContent = new StringContent(JsonConvert.SerializeObject(cartItem), Encoding.UTF8, "application/json");

                    HttpResponseMessage response = await client.PostAsync("http://localhost:5000/cart", jsonContent);

                    if (response.IsSuccessStatusCode)
                    {
                        MessageBox.Show($"{productName} added to cart!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);
                    }
                    else
                    {
                        MessageBox.Show("Failed to add item to cart.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                    }
                }
            }
        }
    }
}
