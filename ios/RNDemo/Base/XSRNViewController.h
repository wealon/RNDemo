//
//  XSRNViewController.h
//  RNDemo
//
//  Created by wealon on 2020/8/18.
//  Copyright © 2020 wealon. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface XSRNViewController : UIViewController

- (instancetype)initWithModuleName:(NSString *)moduleName
                 initialProperties:(NSDictionary *)initialProperties
                     launchOptions:(NSDictionary *)launchOptions;

@end
