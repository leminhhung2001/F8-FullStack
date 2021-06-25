#include<bits/stdc++.h>
using namespace std;

int main(){
    int a[] = {17, 25, 6, 76, 19, -20, 15};
    int n = 7;
    for(int i = 1; i<n; i++){
        int t = a[i];
        int j = i-1;
        while (j >= 0 && t < a[j])
        {
            a[j+1] = a[j];
            j = j - 1;
        }
        a[j+1] = t;
        cout << "Lan " << i << " : ";
        for(int k = 0; k<n; k++){
            cout << a[k] << " ";
        }
        cout << endl;
    }
}