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

namespace WpfApplication
{
    /// <summary>
    /// Interaction logic for Home.xaml
    /// </summary>
    public partial class Home : Page
    {
        public Home()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            NavigationService navService = NavigationService.GetNavigationService(this);
            if (navService != null)
            {
                navService.Navigate(new Badminton());
            }

        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            NavigationService navService1 = NavigationService.GetNavigationService(this);
            if (navService1 != null)
            {
                navService1.Navigate(new FootBall());
            }

        }

        private void Button_Click_2(object sender, RoutedEventArgs e)
        {
            NavigationService navService2 = NavigationService.GetNavigationService(this);
            if (navService2 != null)
            {
                navService2.Navigate(new Cricket());
            }
        }
    }
}
