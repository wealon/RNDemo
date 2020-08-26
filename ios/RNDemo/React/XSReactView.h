//
//  XSReactView.h
//  RNDemo
//
//  Created by wealon on 2020/8/16.
//  Copyright © 2020 wealon. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface XSReactView : UIView

- (instancetype)initWithModuleName:(NSString *)moduleName
                 initialProperties:(NSDictionary *)initialProperties
                     launchOptions:(NSDictionary *)launchOptions;

@end

NS_ASSUME_NONNULL_END
