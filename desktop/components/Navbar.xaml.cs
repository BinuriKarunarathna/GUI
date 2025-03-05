using System;
using System.Collections.Generic;
using System.Linq;
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

namespace WpfApplication.components
{
    /// <summary>
    /// Interaction logic for Navbar.xaml
    /// </summary>
    public partial class Navbar : UserControl
    {
        public Navbar()
        {
            InitializeComponent();
        }

        private void Home_Click(object sender, RoutedEventArgs e)
        {
            MainFrame.Navigate(new Uri("Home.xaml", UriKind.Relative));
        }

        private void Badminton_Click(object sender, RoutedEventArgs e)
        {
            MainFrame.Navigate(new Uri("Badminton.xaml", UriKind.Relative));
        }

        private void Cricket_Click(object sender, RoutedEventArgs e)
        {
            MainFrame.Navigate(new Uri("Cricket.xaml", UriKind.Relative));
        }

        private void Football_Click(object sender, RoutedEventArgs e)
        {
            MainFrame.Navigate(new Uri("Football.xaml", UriKind.Relative));
        }
        private void Cart_Click(object sender, RoutedEventArgs e)
        {
            MainFrame.Navigate(new Uri("Cart.xaml", UriKind.Relative));
        }

        private void Contact_Click(object sender, RoutedEventArgs e)
        {
            MainFrame.Navigate(new Uri("Contact.xaml", UriKind.Relative));
        }
    }
}
