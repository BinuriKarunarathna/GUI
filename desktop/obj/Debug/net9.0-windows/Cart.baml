   M S B A M L   `   `   `  ����I  EWpfApplication, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullE'clr-namespace:WpfApplication.componentsWpfApplication.components  5          WpfApplication.Cart   5      W SPresentationCore, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35^ ZWindowsFormsIntegration, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35H 9http://schemas.microsoft.com/winfx/2006/xaml/presentation      5      R NSystem.Xaml, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5      @d2http://schemas.microsoft.com/expression/blend/2008     5      9local'clr-namespace:WpfApplication.components     5      $	��600��5      $	��900��5	        N� Title$
  Cart��5
       N� 
FontFamily$ Times New Roman)�5      .��5      � 
������� � RowDefinitions 5   
   �� 5      $
��Auto �6   �� 5      $��* �6   �� 5      $
��Auto �6   .+�5   
   &    WpfApplication.components.Navbar  $��0��6   $��2��6$   �� 5!   
   $��1��6   $��2��6$   .��5"      �  � ColumnDefinitions 5#      �� 5$      $��2* �6'   �� 5%      $��1* �6'   .+�5)      ��  K� ZIndex$	 100��6   $��0��61   
�������$��0 0 20 0q�6T   $	��Top=�6f   .+�5*      �� $��Shopping Bag��6    $��20(�64   $
��Bold"�6B   $��	0 0 10 10q�6T   �� 5+      -   5         ��Name$ CartItemCount��5+       
�������$��0 0 20 0q�6I   �� 5.      -   5         ��Name$ CartItemsList��5.      ��66   �� *	CartItems+��5/      �� 50      .R�51   "   �� $��1q�6)   ���#D1D5DB �� Padding$ 10q�6S   $��	0 10 0 10q�6`   ._�52   &   �  53   *   �� 54   .   $��80 �6?   �� 55   .   $��* �6?   �� 56   .   $	��100 �6?   �� 57   .   $	��100 �6?   .+�5;   *   �� $��80��6L   $��80��6W   $��UniformToFill=�6c   $��0��5<      $��10q�6,   ��5;   0   �� *
ImageUrl+5<   ,   �� 5?   *   $��1��65   $
��10 0q�6E   .+�5@   .   �� $��16(�6U   $
��Bold"�6c   ��68   �� *ProductName+6c   5A   +   �� 5D   *   $��2��65   $��Center=�6E   .+�5E   .   �� $��16(�6_   $
��Bold"�6m   ��68   �� *Price+ �� StringFormat$ C��6m   �� 5F   .   	 �� Orientation$	 
Horizontal=�69   $��Center=�6R   $��5q�6o   .+�5G   2   �� -   5        $��-��5G   9   $��25��6E   6P   �� 5H   2   $��30��6V   
 �� TextAlignment$
 Center=�6a   ��6<   �� *
Quantity+6a   �� 5I   2   -   5        $��+��5I   9   $��25��6E   6P   5J   /   5K   +   �� 5N   *   $��3��64   $��16(�5O       $
��Bold"�6.   
��� ���$��Right=�6T   ��5N   D   �� *
TotalPrice+$ C��5O   T   5P   '   5Q   #   5R      5T      5V      �� 5Y      $��1��6   
�������$	��Top=�6@   .+�5Z      �� $��Summary��6    $��20(�6/   $
��Bold"�6=   $��	0 0 10 10q�6O   �� 5\      .+�5]      �� $��Cart Subtotal��6$   $
��Bold"�69   �� 5^      -   5        $ SubtotalText��5^   $   $��16(�6:   5_      �� 5a      $
��0 10q�6!   .+�5b      �� $��Discount��6$   $
��Bold"�64   �� 5c      -   5        $ DiscountText��5c   $   $��16(�6:   5d      �� 5f      .+�5g      �� $��
Cart Total��6$   $
��Bold"�66   �� 5h      -   5        $ 	TotalText��5h   $   $��16(�67   5i      �� 5k      $��Apply��6   
��� ���
�������$��10q�6T   $
��0 10q�5l      5m      5o      5q      &    WpfApplication.components.Footer  5r   
   $��2��6   $��2��6%   5v      5w      