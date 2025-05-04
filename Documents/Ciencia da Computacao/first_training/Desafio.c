#include <stdio.h>

int main() {
    float values[3];
    float sum = 0.0, average;
    int i;

    // Input values month by month with minimum $1000 validation
    for(i = 0; i < 3; i++) {
        do {
            printf("Enter the value for month %d (minimum $1000): ", i + 1);
            scanf("%f", &values[i]);

            if (values[i] < 1000) {
                printf(" Invalid value! The minimum is $1000. Please try again.\n");
            }
        } while (values[i] < 1000);

        sum += values[i];
    }

    // Calculate average
    average = sum / 3;

    // Display average
    printf("Average for the 3 months: $%.2f\n", average);

    // Check eligibility
    if (average >= 1500) {
        printf(" User is eligible.\n");
    } else {
        printf(" User is not eligible.\n");
    }

    return 0;
}