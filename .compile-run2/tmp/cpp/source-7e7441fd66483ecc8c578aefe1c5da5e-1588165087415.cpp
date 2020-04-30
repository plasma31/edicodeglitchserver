#include <bits/stdc++.h>

using namespace std;
vector<int> noOfCandies;

// Complete the candies function below.
long candies(int n, vector<int> arr) {
    long candies=0;
    int counter = 0;
    noOfCandies.insert(noOfCandies.end(),arr.size(),1);    
    for(int i = 1; i < n-1; i++){
        if(arr[i] > arr[i-1] && noOfCandies[i] <= noOfCandies[i-1]){
            noOfCandies[i] = noOfCandies[i-1]+1;
        }          
    }
    for(int i = n-2; i > 0; i--){
        if(arr[i] > arr[i+1] && noOfCandies[i] <= noOfCandies[i+1]){
            noOfCandies[i] = noOfCandies[i+1]+1;
        } 
    }
    if(arr[0] > arr[1] && noOfCandies[0] <= noOfCandies[1]){
        noOfCandies[0] = noOfCandies[1]+1;
    }    
    if(arr[n-1] > arr[n-2] && noOfCandies[n-1] <= noOfCandies[n-2]){
        noOfCandies[n-1] = noOfCandies[n-2]+1;
    }
    for(int j = 0; j < noOfCandies.size(); j++){
        candies += noOfCandies[j];
    }
    return candies;
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    int n;
    cin >> n;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');

    vector<int> arr(n);

    for (int i = 0; i < n; i++) {
        int arr_item;
        cin >> arr_item;
        cin.ignore(numeric_limits<streamsize>::max(), '\n');

        arr[i] = arr_item;
    }

    long result = candies(n, arr);

    fout << result << "\n";

    fout.close();

    return 0;
}
