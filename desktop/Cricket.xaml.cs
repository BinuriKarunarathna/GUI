using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfApplication
{
    /// <summary>
    /// Interaction logic for Cricket.xaml
    /// </summary>
    public partial class Cricket : Page
    {
        public Cricket()
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

                var cartItem = new { product_name = productName, price = price, quantity = 1, image_url = " " };

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
