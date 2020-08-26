//
//  XSCashDeskViewController.m
//  RNDemo
//
//  Created by wealon on 2020/8/27.
//  Copyright © 2020 wealon. All rights reserved.
//

#import "XSCashDeskViewController.h"
#import <Masonry.h>

@interface XSCashDeskViewController ()

@end

@implementation XSCashDeskViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    UILabel *label = [[UILabel alloc] init];
    label.text = @"收银台";
    [self.view addSubview:label];
    
    [label mas_makeConstraints:^(MASConstraintMaker *make) {
        make.center.equalTo(self.view);
    }];
}

@end
