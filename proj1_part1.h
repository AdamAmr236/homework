#include <iosstream>
using namespace std;

int main()
{
	int num1, num2, num3
	cout << "Input your first integer: ";
	cin >> num1;
	cout << "Input your second integer: ";
	cin >> num2;
	cout << "Input your third integer: ";
	cin >> num3;
	if ( num1 > num2 )
	{
		if ( num1 > num3 )
		{
			cout << "The maximum of the three integers is " << num1;
		}
		else
		{
			cout << "The maximum of the three integers is " << num3;
	}
	else
	{
		if ( num2 > num3 )
		{
			cout << "The maximum of the three integers is " << num2;
		}
		else
		{
			cout << "The maximum of the three integers is " << num3 << endl;
		}
}
