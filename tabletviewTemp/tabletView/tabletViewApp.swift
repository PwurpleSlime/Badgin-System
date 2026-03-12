//
//  tabletViewApp.swift
//  tabletView
//
//  Created by Pwurple on 3/5/26.
//

import SwiftUI
import ClerkKit

@main
struct tabletViewApp: App {
    init() {
        Clerk.configure(publishableKey: "pk_test_c29jaWFsLXN0dWQtMjguY2xlcmsuYWNjb3VudHMuZGV2JA")
    }
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(Clerk.shared)
        }
    }
}
