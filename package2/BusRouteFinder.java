package package2;

import java.util.List;
import java.util.Scanner;
import package1.BusData;
import package1.BusData.Bus;

/**
 * BusRouteFinder - searches through bus data to find all buses that pass a given stop.
 *
 * Usage:
 *   - Run the program, enter the stop name (village/town/district).
 *   - The program prints each matching bus with time at that stop and route.
 */
public class BusRouteFinder {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your stop (village/town/district): ");
        String stop = scanner.nextLine().trim();

        List<Bus> buses = BusData.getBuses();

        int foundCount = 0;
        System.out.println("\nBuses passing through '" + stop + "':");

        for (Bus bus : buses) {
            // search the bus stops list (case-insensitive)
            for (int i = 0; i < bus.stops.size(); i++) {
                String s = bus.stops.get(i);
                if (s.equalsIgnoreCase(stop)) {
                    foundCount++;
                    String timeAtStop = bus.stopTimes.get(i);
                    System.out.println(foundCount + ". Bus: " + bus.busNumber
                                       + " | Route: " + bus.startCity + " --> " + bus.endCity
                                       + " | Time at " + stop + ": " + timeAtStop);
                    break; // don't print same bus multiple times if stop repeats
                }
            }
        }

        if (foundCount == 0) {
            System.out.println("No buses found passing through this stop in the sample data.");
        } else {
            System.out.println("\nTotal buses passing through '" + stop + "': " + foundCount);
        }

        scanner.close();
    }
}
