//
//  XSHUDManager.m
//  RNDemo
//
//  Created by wealon on 2020/8/27.
//  Copyright © 2020 wealon. All rights reserved.
//

#import "XSHUDManager.h"
#import <MBProgressHUD/MBProgressHUD.h>
#import "AppDelegate.h"

@implementation XSHUDManager

RCT_EXPORT_MODULE()

//RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
//{
//    NSLog(@"Pretending to create an event %@ at %@", name, location);
//}

// RN调用原生
RCT_EXPORT_METHOD(showToast:(NSString *)toast)
{
    NSLog(@"toast = %@", toast);
    dispatch_async(dispatch_get_main_queue(), ^{
        [XSHUDManager showToast:toast targetView:nil];
    });
    
    if (self.bridge) {
//        [self.bridge enqueueJSCall:@"Communication" method:@"viewWillAppear" args:nil completion:^{
//
//        }];
//        [self.bridge.eventDispatcher sendAppEventWithName:@"eventName" body:@{@"name":@"Himi",@"age": @12}];
//        [self sendEventWithName:<#(NSString *)#> body:<#(id)#>];
    }
}

// RN调用原生
RCT_EXPORT_METHOD(closePage)
{
    NSLog(@"closePage");
    dispatch_async(dispatch_get_main_queue(), ^{
        
        UIWindow *window = [UIApplication sharedApplication].keyWindow;
        UINavigationController *rootNav = (UINavigationController *)window.rootViewController;
        [rootNav popViewControllerAnimated:YES];
        
    });
}

- (NSArray<NSString *> *)supportedEvents
{
    return @[@"EventA"];
}


+ (void)showToast:(NSString *)toast targetView:(UIView *)targetView
{
    if (targetView == nil) {
        NSArray *windows = [UIApplication sharedApplication].windows;
        targetView = windows.firstObject;
    }
    
    MBProgressHUD *hud = [MBProgressHUD showHUDAddedTo:targetView animated:YES];
    hud.mode = MBProgressHUDModeAnnularDeterminate;
    hud.label.text = @"Loading";
    
    
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2.0 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        [MBProgressHUD hideHUDForView:targetView animated:YES];
    });
    
}

@end
