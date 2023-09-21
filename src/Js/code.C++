#include <iostream>

using namespace std;

int main()
{
int T,n,x,counter=0;
cin>>T;
while (T--){
    cin>>n;

int arr[n];
for(int i=0; i<n; i++){
    cin>>arr[i];
}            // 5
for (int i=0; i<n; i++){  // 1 4 2 3 5
for (int j=i; j<n; j++){

    if(arr[j]<=arr[j+1]){ counter+=1;}
    else { break; }
}
counter+=1;
}

cout<<counter<<"\n";
counter=0;
}

    return 0;
}